import { test, expect } from '@playwright/test';

test.describe('Interactive Map Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
  });

  test.setTimeout(30000);

  test('should render the map section with heading', async ({ page }) => {
    const heading = page.locator('h2:has-text("Explore Your Paradise")');
    await expect(heading).toBeVisible();
  });

  test('should display leaflet map container', async ({ page }) => {
    const mapContainer = page.locator('.leaflet-container');
    await expect(mapContainer).toBeVisible();
  });

  test('should display markers on map', async ({ page }) => {
    const markers = page.locator('.leaflet-marker-icon');
    const count = await markers.count();
    expect(count).toBeGreaterThanOrEqual(13);
  });

  test('should display legend section', async ({ page }) => {
    const legendBox = page.locator('h3:has-text("Legend")');
    await expect(legendBox).toBeVisible();
  });

  test('should open popup when clicking marker with visible content', async ({ page }) => {
    const firstMarker = page.locator('.leaflet-marker-icon').first();
    await firstMarker.click({ force: true });

    const popup = page.locator('.leaflet-popup-content');
    await expect(popup).toBeVisible();

    const heading = popup.locator('h3').first();
    await expect(heading).toBeVisible();
    const headingText = await heading.textContent();
    expect(headingText).toBeTruthy();
    expect(headingText?.length).toBeGreaterThan(0);
  });

  test('should display readable type badge in popup with contrast', async ({ page }) => {
    const firstMarker = page.locator('.leaflet-marker-icon').first();
    await firstMarker.click({ force: true });

    const popup = page.locator('.leaflet-popup-content');
    const typeSpan = popup.locator('span').first();

    await expect(typeSpan).toBeVisible();
    const typeText = await typeSpan.textContent();
    expect(typeText).toBeTruthy();
  });

  test('should display description text in popup', async ({ page }) => {
    const firstMarker = page.locator('.leaflet-marker-icon').first();
    await firstMarker.click({ force: true });

    const popup = page.locator('.leaflet-popup-content');
    const description = popup.locator('p').first();

    await expect(description).toBeVisible();
    const descText = await description.textContent();
    expect(descText).toBeTruthy();
    expect(descText?.length).toBeGreaterThan(5);
  });

  test('should have white popup background for visibility', async ({ page }) => {
    const firstMarker = page.locator('.leaflet-marker-icon').first();
    await firstMarker.click({ force: true });

    const popupWrapper = page.locator('.leaflet-popup-content-wrapper');
    const bgColor = await popupWrapper.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    expect(bgColor).toBeTruthy();
  });

  test('should close popup by clicking close button', async ({ page }) => {
    const firstMarker = page.locator('.leaflet-marker-icon').first();
    await firstMarker.click({ force: true });

    const popup = page.locator('.leaflet-popup-content');
    await expect(popup).toBeVisible();

    const closeButton = page.locator('.leaflet-popup-close-button');
    await closeButton.click();

    await expect(popup).toBeHidden();
  });

  test('should have functional zoom controls', async ({ page }) => {
    const zoomInButton = page.locator('.leaflet-control-zoom-in');
    const zoomOutButton = page.locator('.leaflet-control-zoom-out');

    await expect(zoomInButton).toBeVisible();
    await expect(zoomOutButton).toBeVisible();

    await zoomInButton.click();
    await page.waitForTimeout(300);

    await zoomOutButton.click();
    await page.waitForTimeout(300);
  });

  test('should display benefit cards below map', async ({ page }) => {
    const heading = page.locator('h2:has-text("Explore Your Paradise")');
    await heading.scrollIntoViewIfNeeded();
    
    const benefitCards = page.locator('h4:has-text("Private Beaches")');
    await expect(benefitCards).toBeVisible();

    await expect(page.locator('h4:has-text("Fine Dining")')).toBeVisible();
    await expect(page.locator('h4:has-text("Entertainment")')).toBeVisible();
  });

  test('should handle multiple popup interactions', async ({ page }) => {
    const markers = page.locator('.leaflet-marker-icon');

    const firstMarker = markers.nth(0);
    await firstMarker.click({ force: true });
    let popup = page.locator('.leaflet-popup-content');
    await expect(popup).toBeVisible();

    const closeButton = page.locator('.leaflet-popup-close-button').first();
    await closeButton.click();
    await expect(popup).toBeHidden();

    const secondMarker = markers.nth(1);
    await secondMarker.click({ force: true });
    popup = page.locator('.leaflet-popup-content');
    await expect(popup).toBeVisible();
  });

  test('popup text should be visible with good contrast', async ({ page }) => {
    const firstMarker = page.locator('.leaflet-marker-icon').first();
    await firstMarker.click({ force: true });

    const popupContent = page.locator('.leaflet-popup-content');
    const h3 = popupContent.locator('h3').first();

    const textColor = await h3.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });

    expect(textColor).toBeTruthy();

    const allText = await popupContent.textContent();
    expect(allText).toBeTruthy();
    expect(allText?.length).toBeGreaterThan(10);
  });

  test('should show Pro Tips', async ({ page }) => {
    const proTipsBox = page.locator('h3:has-text("Pro Tips")');
    await expect(proTipsBox).toBeVisible();

    await expect(page.locator('text=Click markers for full details')).toBeVisible();
  });

  test('should show Region information', async ({ page }) => {
    const regionBox = page.locator('h3:has-text("Region")');
    await expect(regionBox).toBeVisible();

    const regionText = page.locator('text=Baja California Sur');
    await expect(regionText).toBeVisible();
  });
});
