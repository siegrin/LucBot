<div align="center">
  <h1>paste.gg</h1>
  <a href="https://www.npmjs.com/package/paste.gg"><img src="https://img.shields.io/npm/v/paste.gg.svg?maxAge=3600" alt="NPM version" /></a>
  <a href="https://www.npmjs.com/package/paste.gg"><img src="https://img.shields.io/npm/dt/paste.gg.svg?maxAge=3600" alt="NPM downloads" /></a>
  <a href="https://github.com/SerenModz21/paste.gg/actions"><img src="https://github.com/SerenModz21/paste.gg/actions/workflows/codeql-analysis.yml/badge.svg" alt="Build status" /></a>
  <a href="https://github.com/SerenModz21/paste.gg"><img src="https://img.shields.io/github/languages/code-size/SerenModz21/paste.gg" alt="GitHub code size"></a>
  <p style="max-width: 800px">
    A library for interacting with the Paste.GG API. I have created this in a short amount of time and will expect more updates in the future. The main purpose of this is to help users from having to create API calls. <br/>
  </p>
</div>

### Links

• **[API Documentation](https://github.com/ascclemens/paste/blob/master/api.md#api)** <br/>
• **[GitHub](https://github.com/SerenModz21/paste.gg)** <br/>
• **[NPM](https://www.npmjs.com/package/paste.gg)** <br/>

### Usages

#### Install the stable version
```
npm install paste.gg

yarn add paste.gg
```

#### Install the beta version (git is required)
```
npm install SerenModz21/paste.gg#beta

yarn add SerenModz21/paste.gg#beta
```
<br/>

#### Get started with paste.gg
```ts
const PasteGG = require("paste.gg");
// or
import PasteGG from "paste.gg";

// If you want to be anonymous
const pasteGG = new PasteGG()

// If you want to use an api key
const pasteGG = new PasteGG("apiKeyHere")
```
<br/>

#### Get information about a post
```ts
// if you would like to exclude file contents
await pasteGG.get("idHere")

// If you would like to include file contents
await pasteGG.get("idHere", true)
```
<br/>

#### Post a new paste ([Click here for more options](https://github.com/ascclemens/paste/blob/master/api.md#post-pastes))
```ts
await pasteGG.post({
  name: "Paste name", // Optional
  description: "Paste description", // Optional
  expires: "2020-12-21T02:25:56.428Z", // Optional (must be a UTC ISO 8601 string)
  files: [{
    name: "file.txt", // Optional
    content: {
      format: "text",
      value: "This is where the file content will go"
    }
  }]
})
```
<br/>

#### Delete a paste (auth/deletion key needed)
```ts
// Delete with deletion key
await pasteGG.delete("idHere", "deletionKeyHere")

// Delete with auth key if not set in constructor
await pasteGG.delete("idHere", "authKeyHere") 

// Leave blank if auth key is in the class constructor
await pasteGG.delete("idHere")
```
<br/>

#### Update the post
```ts
await pasteGG.update("idHere", {
  name: "new name", // Optional (if you want to remove the name)
  description: "new description"
})
```
<br/>

---

Contributions are more than welcome. If you would like to add to this API, you can open a pull request as I haven't added everything on the API, only the things that will get used more often.

Copyright © SerenModz21 2018 - 2021
