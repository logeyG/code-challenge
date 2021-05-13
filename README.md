# Usage

Install dependencies via `yarn install`

Run via `yarn start`

Run cypress E2E tests via `yarn test` (server needs to be running)

# Reflections

This was a fair and fun challenge! I ended up using React which I have no experience with and ended up being able to get everything working fairly quickly. For the table rendering I'm using `react-table`, I figured there's no reason to reinvent the wheel and the library comes included with things like searching, sorting, and pagination.

I'm sure you'll notice that the application UI is extremely basic! I didn't want to over-engineer here and wanted to just focus on fulfilling the 3 requirements and nothing else. I'm confident I could create something that looks a lot better, but don't think that is necessarily a good use of my time / showcases my skills.

I opted to spend the remaining of my 3 hours to set up `cypress`, an E2E testing framework (especially considering my conversation with Brad on E2E testing). I had no prior experience with this framework as well, but found it fairly easy to setup, and was very surprised by the ease of use from a development point of view (another tool I've used is `protractor`, which I would not recommend). You'll notice that all 3 requirements have E2E tests on them, although I will say I did mock out the request to `api.nytimes` because I was worried about API limits.