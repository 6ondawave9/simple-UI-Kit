class UIKVCustomSelect {
    constructor(args) {
        const {blockId, options, defaultValue} = args
        let block = document.querySelector(`#${blockId}`)
        this.options = options
        this.val = defaultValue ? defaultValue : options[0]

        let box = document.createElement('div')
        box.classList.add('UIKV-custom-select-box')

        let longestOption = this.options.reduce((max, n) => max.length > n.length ? max : n, '');
        longestOption = longestOption.length >= this.val.length ? longestOption : this.val
        box.style.width = longestOption.length * 8 + 18 + 'px'

        box.style.display = 'flex'
        box.style.alignItems = 'center'
        block.appendChild(box)

        this.choosedOption = document.createElement('div')
        this.choosedOption.innerText = this.val
        box.appendChild(this.choosedOption)

        let arrow = document.createElement('div')
        arrow.classList.add('UIKV-custom-select-arrow')
        box.appendChild(arrow)

        let optionslist = document.createElement('div')
        optionslist.classList.add('UIKV-custom-select-options-list')
        optionslist.style.top = box.getBoundingClientRect().height + 'px'
        block.appendChild(optionslist)
        optionslist.style.display = 'none'

        block.addEventListener('click', ()=>{
            if (optionslist.style.display != 'none') {
                arrow.style.transform = 'rotate(-45deg)'
                optionslist.style.display = 'none'
                box.style.borderBottomLeftRadius = '10px'
                box.style.borderBottomRightRadius = '10px'
                box.style.border = ''
            } else {
                arrow.style.transform = 'rotate(135deg)'
                optionslist.style.display = 'block'
                box.style.borderBottomLeftRadius = '0px'
                box.style.borderBottomRightRadius = '0px'
                box.style.border = '2px solid var(--dark-color)'
            }
        })
        
        this.optionsBlocks = []

        this.options.forEach(el => {
            let optionBlock = document.createElement('div')
            optionBlock.classList.add('UIKV-custom-select-option')
            optionBlock.style.width = Math.ceil(block.getBoundingClientRect().width) + 'px'
            optionBlock.innerText = el
            if (el == this.val) {
                optionBlock.style.textDecoration = 'underline'
            }
            optionslist.appendChild(optionBlock)
            optionBlock.addEventListener('click', (e)=>{
                this.chooseOption(e.target)
            })
            this.optionsBlocks.push(optionBlock)
        });
        this.optionsBlocks[this.optionsBlocks.length-1].style.borderBottomLeftRadius = '10px'
        this.optionsBlocks[this.optionsBlocks.length-1].style.borderBottomRightRadius = '10px'
        this.optionsBlocks[0].style.borderTop = '0px solid transparent'
        this.optionsBlocks[0].style.paddingTop = '4px'

        document.addEventListener('click', (e)=>{
            if (e.target != box && e.target != this.choosedOption && e.target != arrow) {
                optionslist.style.display = 'none'
                box.style.borderBottomLeftRadius = '10px'
                box.style.borderBottomRightRadius = '10px'
                box.style.border = ''
                arrow.style.transform = 'rotate(-45deg)'
            }
        })
    }

    chooseOption(option) {
        this.val = option.innerText
        this.choosedOption.innerText = option.innerText
        this.optionsBlocks.forEach((el)=>{el.style.textDecoration = 'none'})
        option.style.textDecoration = 'underline'
        this.optionsBlocks[0].style.borderTop = '0px solid transparent'
    }

    set value(a){
        this.optionsBlocks.forEach((el)=>{
            if (el.innerText == a) {
                this.val = a
                this.chooseOption(el)
            }
        })
    }
    get value() {
        return this.val
    }
}