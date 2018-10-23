<div align="center">
  <h1>
    Refined Facebook  
  </h1>

  <p>
    <strong>Browser extension that simplifies the Facebook interface.</strong>
  </p>
</div>


## Installation (as unpacked extension)
1. Clone the repository `git clone https://github.com/heocoi/refined-facebook.git`
2. Run `yarn install`
3. Run `yarn build`



##### Load the extension in Chrome & Opera
1. Open Chrome/Opera browser and navigate to chrome://extensions
2. Select "Developer Mode" and then click "Load unpacked extension..."
3. From the file browser, choose to `refined-facebook/build/chrome` or (`refined-facebook/build/opera`)


##### Load the extension in Firefox
1. Open Firefox browser and navigate to about:debugging
2. Click "Load Temporary Add-on" and from the file browser, choose `refined-facebook/build/firefox`


## Developing
The following tasks can be used when you want to start developing the extension and want to enable live reload - 

- `yarn chrome-watch`
- `yarn opera-watch`
- `yarn firefox-watch`


## Packaging
Run `yarn dist` to create a zipped, production-ready extension for each browser. You can then upload that to the appstore.


## TODO
- [ ] Add promo resources
- [ ] Publish into browser extension store.
- [ ] Add support for Safari
- [ ] Write a guide for using config variables & JS preprocessor


-----------
This project is licensed under the MIT license. 

heocoi <dev.hibiki@gmail.com>
