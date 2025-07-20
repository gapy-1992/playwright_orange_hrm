import { Page } from "@playwright/test";
import { ElementHandle } from "@playwright/test";
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
                const titleElement = await page.getByTitle(locatorName);
                await titleElement.waitFor({ state: 'visible' });
                return titleElement;
            case 'alt':
                const altElement = await page.getByAltText(locatorName);
                await altElement.waitFor({ state: 'visible' });
                return altElement

            case 'placeholder':
                const placeHolderElement = await page.getByPlaceholder(locatorName);
                await placeHolderElement.waitFor({ state: 'visible' });
                return placeHolderElement;

            default:
                const defaultElement = await await page.locator(locator);
                await defaultElement.waitFor({ state: 'visible' })
                return defaultElement;
        }
    } catch (error) {
        throw new Error(`Failed to process locator: ${locator}. Please check the locator syntax or format.`);
    }
}
