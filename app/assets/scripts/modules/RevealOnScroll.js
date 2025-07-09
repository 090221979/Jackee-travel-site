import throttle from '../../../../node_modules/lodash/throttle'
import debounce from '../../../../node_modules/lodash/debounce'
class RevealOnScroll
{
    constructor(els, thresholdPercent)
    {
        this.thresholdPercent = thresholdPercent
        this.itemsToReveal = els
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller,200).bind(this)
        this.events()
    }

    events()
    {
        window.addEventListener('scroll',this.scrollThrottle)
        window.addEventListener('resize',debounce(()=>
            {
                this.browserHeight = window.innerHeight
                console.log('resize just ran')
            }, 333))
    }

    calcCaller()
    {
        console.log("Scroll completed")
                this.itemsToReveal.forEach(el=>
                    {
                        if(el.isRevealed == false )
                            {
                                this.calculateIfScrolledTo(el)
                            }
                    })
    }

    calculateIfScrolledTo(el)
    {
      if(window.scrollY + this.browserHeight > el.offsetTop)
        {
            let scrollPercent = (el.getBoundingClientRect().y/this.browserHeight ) * 100
            if(scrollPercent < this.thresholdPercent)
                {
                    el.classList.add("reveal-item--is-visible")
                    el.isRevealed = true
                    if(el.isLastItem)
                        {
                            window.removeEventListener("scroll",this.scrollThrottle)
                        }
                }
        }
    }

    hideInitially()
    {
        this.itemsToReveal.forEach(el => 
            {
                el.classList.add('reveal-item')
                el.isRevealed = false
            })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
    }
}

export default RevealOnScroll