class vmDotLoader 
{
    constructor(settings) 
    {
        this.container_class = settings.container_class ?? 'vm_dot_loader'
        this.pattern         = settings.pattern ?? '.'
        this.refresh_freq    = settings.refresh_freq ?? 200
        this.max_len         = settings.max_len ?? 3
        this.containers      = this.getContainers()
        this.timer

        this.clearContainers()
        this.run()
    }

    getContainers() 
    {
        return document.getElementsByClassName(this.container_class)
    }

    clearContainers()
    {
        for (let container of this.containers) 
        {
            container.innerHTML = ''
        }
    }

    changeContainerLoad(container) 
    {
        if (container.innerHTML !== undefined)
        {
            let length = container.innerHTML.length 
    
            if (length < this.max_len) 
            {
                container.innerHTML = this.pattern.repeat(length + 1)
            }
            else if (length >= this.max_len) 
            {
                container.innerHTML = this.pattern
            }
        }
    }

    run() 
    {
        let self = this
        setInterval(function() {
            for (let container of self.containers)
            {
                self.changeContainerLoad(container)
            }
        }, this.refresh_freq)
    }
}

