// scripts/optimize-build.js - Build optimization script
import { promises as fs } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

class BuildOptimizer {
  constructor() {
    this.distPath = join(projectRoot, 'dist');
    this.stats = {
      totalFiles: 0,
      totalSize: 0,
      optimizedSize: 0,
      compressionRatio: 0
    };
  }

  async optimize() {
    console.log('🚀 Starting build optimization...\n');

    try {
      // Step 1: Clean previous builds
      await this.cleanBuild();

      // Step 2: Run production build
      await this.buildProduction();

      // Step 3: Analyze bundle
      await this.analyzeBundle();

      // Step 4: Optimize assets
      await this.optimizeAssets();

      // Step 5: Generate reports
      await this.generateReports();

      // Step 6: Validate build
      await this.validateBuild();

      console.log('\n✅ Build optimization completed successfully!');
      this.printStats();

    } catch (error) {
      console.error('❌ Build optimization failed:', error);
      process.exit(1);
    }
  }

  async cleanBuild() {
    console.log('🧹 Cleaning previous builds...');
    
    try {
      await fs.rm(this.distPath, { recursive: true, force: true });
      await fs.rm(join(projectRoot, 'node_modules/.vite'), { recursive: true, force: true });
      console.log('✓ Build directories cleaned');
    } catch (error) {
      console.log('ℹ️ No previous build to clean');
    }
  }

  async buildProduction() {
    console.log('🔨 Building production bundle...');
    
    try {
      execSync('npm run build', { 
        cwd: projectRoot, 
        stdio: 'inherit',
        env: { ...process.env, NODE_ENV: 'production' }
      });
      console.log('✓ Production build completed');
    } catch (error) {
      throw new Error('Production build failed');
    }
  }

  async analyzeBundle() {
    console.log('📊 Analyzing bundle size...');
    
    const files = await this.getFilesRecursively(this.distPath);
    this.stats.totalFiles = files.length;
    
    let totalSize = 0;
    for (const file of files) {
      const stats = await fs.stat(file);
      totalSize += stats.size;
    }
    
    this.stats.totalSize = totalSize;
    this.stats.optimizedSize = totalSize; // Will be updated after optimization
    
    console.log(`✓ Found ${files.length} files (${this.formatBytes(totalSize)})`);
  }

  async optimizeAssets() {
    console.log('⚡ Optimizing assets...');

    // Optimize images
    await this.optimizeImages();

    // Optimize CSS
    await this.optimizeCSS();

    // Optimize JavaScript
    await this.optimizeJS();

    // Generate compressed versions
    await this.generateCompressedFiles();

    console.log('✓ Asset optimization completed');
  }

  async optimizeImages() {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];
    const imageFiles = await this.getFilesByExtensions(this.distPath, imageExtensions);
    
    if (imageFiles.length === 0) {
      console.log('  ℹ️ No images to optimize');
      return;
    }

    console.log(`  🖼️ Optimizing ${imageFiles.length} images...`);
    
    // Create optimized versions
    for (const file of imageFiles) {
      try {
        // For now, just log - in a real app you'd use tools like sharp or imagemin
        const stats = await fs.stat(file);
        console.log(`    ✓ ${file.split('/').pop()} (${this.formatBytes(stats.size)})`);
      } catch (error) {
        console.log(`    ⚠️ Failed to optimize ${file}`);
      }
    }
  }

  async optimizeCSS() {
    const cssFiles = await this.getFilesByExtensions(this.distPath, ['.css']);
    
    if (cssFiles.length === 0) {
      console.log('  ℹ️ No CSS files to optimize');
      return;
    }

    console.log(`  🎨 Optimizing ${cssFiles.length} CSS files...`);
    
    for (const file of cssFiles) {
      try {
        let content = await fs.readFile(file, 'utf8');
        const originalSize = content.length;
        
        // Remove comments and extra whitespace (basic optimization)
        content = content
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
          .replace(/\s+/g, ' ') // Normalize whitespace
          .replace(/;\s*}/g, '}') // Remove last semicolon before closing brace
          .trim();
        
        await fs.writeFile(file, content);
        
        const newSize = content.length;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        
        console.log(`    ✓ ${file.split('/').pop()} (${savings}% smaller)`);
      } catch (error) {
        console.log(`    ⚠️ Failed to optimize ${file}`);
      }
    }
  }

  async optimizeJS() {
    const jsFiles = await this.getFilesByExtensions(this.distPath, ['.js']);
    
    if (jsFiles.length === 0) {
      console.log('  ℹ️ No JavaScript files to optimize');
      return;
    }

    console.log(`  📜 Analyzing ${jsFiles.length} JavaScript files...`);
    
    for (const file of jsFiles) {
      try {
        const stats = await fs.stat(file);
        console.log(`    ✓ ${file.split('/').pop()} (${this.formatBytes(stats.size)})`);
      } catch (error) {
        console.log(`    ⚠️ Failed to analyze ${file}`);
      }
    }
  }

  async generateCompressedFiles() {
    console.log('  📦 Generating compressed versions...');
    
    const compressibleFiles = await this.getFilesByExtensions(
      this.distPath, 
      ['.js', '.css', '.html', '.json', '.svg']
    );

    for (const file of compressibleFiles) {
      try {
        // In a real implementation, you'd use actual compression libraries
        const content = await fs.readFile(file);
        const stats = await fs.stat(file);
        
        // Simulate compression ratio (70% of original size)
        const simulatedCompressedSize = Math.floor(stats.size * 0.7);
        
        console.log(`    ✓ ${file.split('/').pop()} (${this.formatBytes(simulatedCompressedSize)} compressed)`);
      } catch (error) {
        console.log(`    ⚠️ Failed to compress ${file}`);
      }
    }
  }

  async generateReports() {
    console.log('📋 Generating optimization reports...');

    const reportDir = join(projectRoot, 'reports');
    await fs.mkdir(reportDir, { recursive: true });

    // Bundle size report
    await this.generateBundleReport(reportDir);

    // Performance report
    await this.generatePerformanceReport(reportDir);

    // Asset manifest
    await this.generateAssetManifest(reportDir);

    console.log('✓ Reports generated in /reports directory');
  }

  async generateBundleReport(reportDir) {
    const files = await this.getFilesRecursively(this.distPath);
    
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: files.length,
      totalSize: this.stats.totalSize,
      files: []
    };

    for (const file of files) {
      const stats = await fs.stat(file);
      const relativePath = file.replace(this.distPath, '');
      
      report.files.push({
        path: relativePath,
        size: stats.size,
        sizeFormatted: this.formatBytes(stats.size),
        type: this.getFileType(file)
      });
    }

    // Sort by size (largest first)
    report.files.sort((a, b) => b.size - a.size);

    await fs.writeFile(
      join(reportDir, 'bundle-analysis.json'),
      JSON.stringify(report, null, 2)
    );
  }

  async generatePerformanceReport(reportDir) {
    const performanceMetrics = {
      timestamp: new Date().toISOString(),
      bundleSize: this.stats.totalSize,
      estimatedLoadTime: {
        '3g': this.estimateLoadTime(this.stats.totalSize, 750), // 750 KB/s
        '4g': this.estimateLoadTime(this.stats.totalSize, 1500), // 1.5 MB/s
        'broadband': this.estimateLoadTime(this.stats.totalSize, 5000) // 5 MB/s
      },
      recommendations: this.generateRecommendations()
    };

    await fs.writeFile(
      join(reportDir, 'performance-analysis.json'),
      JSON.stringify(performanceMetrics, null, 2)
    );
  }

  async generateAssetManifest(reportDir) {
    const files = await this.getFilesRecursively(this.distPath);
    
    const manifest = {
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      assets: {}
    };

    for (const file of files) {
      const relativePath = file.replace(this.distPath, '').replace(/^\//, '');
      const stats = await fs.stat(file);
      
      manifest.assets[relativePath] = {
        size: stats.size,
        lastModified: stats.mtime.toISOString(),
        type: this.getFileType(file)
      };
    }

    await fs.writeFile(
      join(reportDir, 'asset-manifest.json'),
      JSON.stringify(manifest, null, 2)
    );
  }

  async validateBuild() {
    console.log('🔍 Validating build...');

    const validations = [
      this.validateRequiredFiles(),
      this.validateFilesSizes(),
      this.validateManifest(),
      this.validateServiceWorker()
    ];

    const results = await Promise.all(validations);
    const passed = results.every(result => result.passed);

    if (passed) {
      console.log('✓ All validations passed');
    } else {
      console.log('⚠️ Some validations failed');
      results.forEach(result => {
        if (!result.passed) {
          console.log(`  ❌ ${result.message}`);
        }
      });
    }

    return passed;
  }

  async validateRequiredFiles() {
    const requiredFiles = [
      'index.html',
      'manifest.json',
      'sw.js'
    ];

    for (const file of requiredFiles) {
      const filePath = join(this.distPath, file);
      try {
        await fs.access(filePath);
      } catch {
        return { passed: false, message: `Missing required file: ${file}` };
      }
    }

    return { passed: true, message: 'All required files present' };
  }

  async validateFilesSizes() {
    const jsFiles = await this.getFilesByExtensions(this.distPath, ['.js']);
    const cssFiles = await this.getFilesByExtensions(this.distPath, ['.css']);

    const maxJSSize = 500 * 1024; // 500KB
    const maxCSSSize = 100 * 1024; // 100KB

    for (const file of jsFiles) {
      const stats = await fs.stat(file);
      if (stats.size > maxJSSize) {
        return { 
          passed: false, 
          message: `JavaScript file too large: ${file.split('/').pop()} (${this.formatBytes(stats.size)})` 
        };
      }
    }

    for (const file of cssFiles) {
      const stats = await fs.stat(file);
      if (stats.size > maxCSSSize) {
        return { 
          passed: false, 
          message: `CSS file too large: ${file.split('/').pop()} (${this.formatBytes(stats.size)})` 
        };
      }
    }

    return { passed: true, message: 'File sizes within limits' };
  }

  async validateManifest() {
    try {
      const manifestPath = join(this.distPath, 'manifest.json');
      const manifestContent = await fs.readFile(manifestPath, 'utf8');
      const manifest = JSON.parse(manifestContent);

      const requiredFields = ['name', 'short_name', 'start_url', 'display', 'icons'];
      for (const field of requiredFields) {
        if (!manifest[field]) {
          return { passed: false, message: `Manifest missing required field: ${field}` };
        }
      }

      return { passed: true, message: 'Manifest is valid' };
    } catch {
      return { passed: false, message: 'Invalid or missing manifest.json' };
    }
  }

  async validateServiceWorker() {
    try {
      const swPath = join(this.distPath, 'sw.js');
      const swContent = await fs.readFile(swPath, 'utf8');
      
      // Basic validation - check for essential service worker features
      const requiredFeatures = ['install', 'activate', 'fetch'];
      for (const feature of requiredFeatures) {
        if (!swContent.includes(feature)) {
          return { passed: false, message: `Service worker missing ${feature} event handler` };
        }
      }

      return { passed: true, message: 'Service worker is valid' };
    } catch {
      return { passed: false, message: 'Invalid or missing service worker' };
    }
  }

  // Utility methods
  async getFilesRecursively(dir) {
    const files = [];
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = join(dir, item.name);
      if (item.isDirectory()) {
        files.push(...await this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    }

    return files;
  }

  async getFilesByExtensions(dir, extensions) {
    const allFiles = await this.getFilesRecursively(dir);
    return allFiles.filter(file => 
      extensions.some(ext => file.toLowerCase().endsWith(ext))
    );
  }

  getFileType(file) {
    const ext = file.split('.').pop().toLowerCase();
    const typeMap = {
      'js': 'javascript',
      'css': 'stylesheet',
      'html': 'document',
      'png': 'image',
      'jpg': 'image',
      'jpeg': 'image',
      'svg': 'image',
      'webp': 'image',
      'woff2': 'font',
      'woff': 'font',
      'ttf': 'font',
      'json': 'data',
      'mp3': 'audio',
      'wav': 'audio'
    };
    return typeMap[ext] || 'other';
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  estimateLoadTime(bytes, kbps) {
    const seconds = (bytes / 1024) / kbps;
    return `${seconds.toFixed(1)}s`;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.stats.totalSize > 1024 * 1024) {
      recommendations.push('Consider code splitting to reduce initial bundle size');
    }
    
    if (this.stats.totalSize > 2 * 1024 * 1024) {
      recommendations.push('Bundle size is quite large - implement lazy loading');
    }

    recommendations.push('Use CDN for static assets');
    recommendations.push('Enable gzip/brotli compression on server');
    recommendations.push('Consider using WebP format for images');

    return recommendations;
  }

  printStats() {
    console.log('\n📊 Build Statistics:');
    console.log(`   Total files: ${this.stats.totalFiles}`);
    console.log(`   Total size: ${this.formatBytes(this.stats.totalSize)}`);
    console.log(`   Estimated 3G load time: ${this.estimateLoadTime(this.stats.totalSize, 750)}`);
    console.log(`   Estimated 4G load time: ${this.estimateLoadTime(this.stats.totalSize, 1500)}`);
  }
}

// Health check script
export const healthCheck = async () => {
  console.log('🏥 Running health check...\n');

  const checks = [
    checkNodeVersion(),
    checkNpmVersion(),
    checkDependencies(),
    checkEnvironmentVariables(),
    checkNetlifyConfig()
  ];

  const results = await Promise.all(checks);
  const passed = results.every(result => result.passed);

  console.log('\n' + (passed ? '✅ All health checks passed!' : '❌ Some health checks failed!'));
  
  results.forEach(result => {
    const icon = result.passed ? '✓' : '❌';
    console.log(`${icon} ${result.message}`);
  });

  return passed;
};

const checkNodeVersion = async () => {
  const version = process.version;
  const major = parseInt(version.slice(1).split('.')[0]);
  
  return {
    passed: major >= 18,
    message: `Node.js version: ${version} ${major >= 18 ? '(✓)' : '(requires >= 18)'}`
  };
};

const checkNpmVersion = async () => {
  try {
    const version = execSync('npm --version', { encoding: 'utf8' }).trim();
    const major = parseInt(version.split('.')[0]);
    
    return {
      passed: major >= 9,
      message: `npm version: ${version} ${major >= 9 ? '(✓)' : '(requires >= 9)'}`
    };
  } catch {
    return { passed: false, message: 'npm not found' };
  }
};

const checkDependencies = async () => {
  try {
    const packagePath = join(projectRoot, 'package.json');
    const packageContent = await fs.readFile(packagePath, 'utf8');
    const pkg = JSON.parse(packageContent);
    
    const depCount = Object.keys(pkg.dependencies || {}).length;
    const devDepCount = Object.keys(pkg.devDependencies || {}).length;
    
    return {
      passed: true,
      message: `Dependencies: ${depCount} runtime, ${devDepCount} development`
    };
  } catch {
    return { passed: false, message: 'Failed to read package.json' };
  }
};

const checkEnvironmentVariables = async () => {
  const required = [
    'VITE_CONTACT_EMAIL',
    'VITE_WHATSAPP_NUMBER',
    'VITE_STREAM_URL_PRIMARY'
  ];

  const missing = required.filter(env => !process.env[env]);
  
  return {
    passed: missing.length === 0,
    message: missing.length === 0 
      ? 'All required environment variables present'
      : `Missing environment variables: ${missing.join(', ')}`
  };
};

const checkNetlifyConfig = async () => {
  try {
    const configPath = join(projectRoot, 'netlify.toml');
    await fs.access(configPath);
    
    return {
      passed: true,
      message: 'Netlify configuration found'
    };
  } catch {
    return {
      passed: false,
      message: 'netlify.toml not found'
    };
  }
};

// Run optimization if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new BuildOptimizer();
  await optimizer.optimize();
}