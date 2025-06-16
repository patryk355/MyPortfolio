# MyPortfolio

## Deployment

This project is configured to deploy to GitHub Pages with a custom domain.

### Automatic Deployment (Recommended)

This project now includes a GitHub Actions workflow for automatic deployment:

1. Make sure your repository has GitHub Pages enabled in the repository settings.
2. Ensure your custom domain DNS settings are properly configured to point to GitHub Pages.
3. Push your changes to the main branch, and the GitHub Actions workflow will automatically build and deploy the application.
4. The deployment process can be monitored in the "Actions" tab of your GitHub repository.

### Manual Deployment

If you prefer to deploy manually:

1. Make sure your custom domain DNS settings are properly configured to point to GitHub Pages.
2. Run `npm run deploy` to build and deploy the application to GitHub Pages.
3. After deployment, GitHub Pages will use the CNAME file in the public directory to configure the custom domain.

### Troubleshooting Deployment Issues

If you encounter issues with deployment:

1. **Check GitHub Pages Settings**: Go to your repository settings > Pages and ensure:
   - Source is set to "Deploy from a branch"
   - Branch is set to "gh-pages" and folder is set to "/ (root)"
   - Custom domain is correctly configured

2. **Verify CNAME File**: Ensure the CNAME file in the public directory contains only your domain name without any extra characters.

3. **DNS Configuration**: Make sure your domain's DNS settings include:
   - An A record pointing to GitHub's IP addresses (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - A CNAME record for www pointing to your GitHub Pages URL (yourusername.github.io)

4. **Wait for DNS Propagation**: DNS changes can take up to 48 hours to propagate globally.

### Configuration Notes

- The `base` URL in `vite.config.ts` is set to `'/'` for custom domain deployment.
- The `homepage` in `package.json` is set to the custom domain URL.
- The `public/CNAME` file contains the custom domain name.
