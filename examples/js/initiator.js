window.createManagers = (function (Manager) {

    const
        themes =
            {
                indigo: '#3F51B5',
                //default: '#55acee',
                red: '#F44336',
                pink: '#E91E63',
                purple: '#9C27B0',
                'deep-purple': '#673AB7',
                blue: '#2196F3',
                'light-blue': '#03A9F4',
                cyan: '#00BCD4',
                teal: '#009688',
                green: '#4CAF50',
                'light-green': '#8BC34A',
                lime: '#CDDC39',
                yellow: '#FFEB3B',
                amber: '#FFC107',
                orange: '#FF9800',
                'deep-orange': '#FF5722',
                brown: '#795548',
                grey: '#9E9E9E',
                'blue-grey': '#607D8B'
            },
        managers = [],
        methods = {

            render: function (manager) {
                manager.render();
            },

            addTask: function (manager, name = prompt('Task name ', 'Example task')) {
                if (name) {
                    fetch('add-task', {
                        method: 'post',
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                        },
                        body: 'name=' + name
                    }).then(function (response) {
                        if (response.ok) {
                            response.json().then((data) => manager.addTasks(data));
                        } else {
                            alert(response.statusText);
                        }
                    })
                }
            }
        };

    function renderThemesButtons() {

        const owner = document.querySelector('.wrapper > .actions');

        const buttons = Object.entries(themes).map(function (item) {
            const [name, color] = item;
            return {
                //disabled: true,
                tagName: 'spam',
                label: 'Theme',
                hiddenLabel: name,
                iconName: 'menu',
                iconHoverName: 'heart',
                iconSize: 'big',
                colorOption: color,
                handler: function (event) {
                    event.preventDefault();
                    createManagers(getConfigs(name));
                }
            }
        });

        const group = new Manager.ButtonsGroup({buttons: buttons, selectIcon: 'heart', selectable: true, scaled: true});

        owner.append(group.render());

        setTimeout(function () {
            group.arrange = true;
        }, 1000);

        group.buttons.forEach((btn) => {
            btn.icon.color = btn.options.colorOption;
        });

        return group;
    }

    document.addEventListener("DOMContentLoaded", function () {

        renderThemesButtons().buttons[0].element.click();

        this.addEventListener(Manager.Events.ready, function (event) {
            const el = event.manager.ownerElement.parentNode;
            el.querySelectorAll('button').forEach(function (btnEl) {
                btnEl.removeAttribute('disabled');
                btnEl.addEventListener('click', methods[btnEl.getAttribute('data-method')].bind(btnEl, event.manager, undefined));
            });
        });

        this.addEventListener(Manager.Events.destroy, function (event) {
            const el = event.manager.ownerElement.parentNode;
            el.remove();
        });

    });


    return function (configs) {
        managers.forEach((manager => {
            manager.destroy()
        }));

        const template = document.querySelector('#template-managers .test-manager'),
            placement = document.getElementById('manager-placement');

        configs.forEach(function (config) {
            const el = placement.appendChild(template.cloneNode(true));
            config.element = el.querySelector('.manager');
            const manager = new Manager(config);
            managers.push(manager);
            methods.addTask(manager, 'Initial Tasks')
        });
    }

})(window.QueueManager);