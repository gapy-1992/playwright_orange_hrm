import { Page } from "@playwright/test";

/**
 *  return Locator base on prefix:
 * - 'title'  → page.getByTitle(value)
 * - 'testId' → page.getByTestId(value)
 * - 'text'   → page.getByText(value)
 * - default  → page.locator(`[${attrName}="${value}"]`)
 */

export async function locatorProcessor(locator: string, page: Page) {
    if (!locator) {
        throw new Error("Locator cannot be empty");
    }

    if (typeof locator !== 'string') {
        throw new Error("Locator must be a string");
    }

    // get prefix
    const parts = locator.split("=");
    if (parts.length !== 2) {
        return await page.locator(locator);
    }

    const [prefix, attr] = parts;
    const locatorName = attr.replace(/^['"]|['"]$/g, ''); // remove all '""' and replace with ' ' 
    try {
        switch (prefix) {
            case 'title':
                return await page.getByTitle(locatorName);

            case 'alt':
                return await page.getByAltText(locatorName);

            case 'placeholder':
                return await page.getByPlaceholder(locatorName);

            default:
                return await page.locator(locator);
        }
    } catch (error) {
        throw new Error(`Failed to process locator: ${locator}. Please check the locator syntax or format.`);
    }
}