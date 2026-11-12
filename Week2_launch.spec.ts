//import {test,chromium} from '@playwright/test';

// test("should launch the application", async () => 
//     {
//         const browser =await chromium.launch()
//         const context=await browser.newContext()
//         const page= await context.newPage()
//         await page.goto("https://www.amazon.com/")
//         await page.waitForTimeout(8000)
//     })

// Using page Fixtures
    import {test} from '@playwright/test';
    test("should launch the application", async ({page}) => 
    {
        await page.goto("https://www.amazon.com/")
        await page.waitForTimeout(8000)
    })