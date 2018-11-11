const DEFAULT_OUTTIME = 300;
const DEF_DELAY = 1
async function getElement(_node,selector) {
  await this.waitFor(_node, selector);
  const ele = await _node.$(selector);
  if (!ele) {
    return getElement(_node,selector);
  } else {
    return ele;
  }
}

async function getElements(_node,selector) {
  await this.waitFor(_node, selector);
  const eles = await _node.$$(selector);
  if (Array.isArray(eles) && eles.length === 0) {
    return getElemments(_node,selector);
  } else {
    return eles;
  }
}

async function click(_node,selector) {
    let ele = await this.getElement(_node,selector);
    await ele.click();
};

async function clickMutil(_node,selector,button,clickCount=1,delay=DEF_DELAY) {
    let ele = await this.getElement(_node,selector);
    await ele.click({button:button,clickCount:clickCount,delay:delay});
};

async function input(_node,selector,text) {
    await this.getElement(_node,selector);
    await _node.type(selector,text,{delay: 2});
};

async function goto(_node,url) {
    await _node.goto(url);
};

async function close(_node) {
    await _node.close();
};

async function clear(_node, selector) {
    await this.waitFor(_node, selector);
    await _node.focus(selector);
    await _node.$eval(selector, input => input.select(), selector);
    if (_node.keyboard) {
      await _node.keyboard.press('Delete');
    } else {
      await _node.evaluate(() => {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Delete' }));
        document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Delete' }));
      });
    }
};

async function execute(_node, ...args) {
    const result = await _node.evaluate(...args);
    return result;
}

async function switchToActivityPage() {
    const allpages = await browser.pages();
    return allpages[allpages.length - 1];
}

async function waitFor(_node,timeOrSelector){
    await _node.waitFor(timeOrSelector);
}

async function getText(_node, selector){
    await this.waitFor(_node, selector);
    const innerText = await _node.$eval(selector, node => node.innerText);
    return innerText;
}


module.exports= {
    getElement:getElement,
    getElements:getElements,
    click: click,
    clickMutil: clickMutil,
    input: input,
    goto: goto,
    close: close,
    execute: execute,
    switchToActivityPage: switchToActivityPage,
    waitFor: waitFor,
    clear: clear,
    getText: getText,
};