
function customreact (element, container) {
    // const context = document.createElement(element.type)
    // context.setAttribute(`href`, element.props.href)
    // context.setAttribute(`target`, element.props.target)
    // context.innerHTML = element.children

    // container.appendChild(context)

    const context = document.createElement(element.type)
    for (const prop in element.props) {
        if(prop == children) continue;
        context.setAttribute(prop, element.props[prop])
    }
    context.innerHTML = element.children

    container.appendChild(context)


}


const reactElement = {
    type: `a`,
    props: {
        href: `https://www.google.com`,
        target: `_blank`
    },
    children: `click me`
}

const mainContainer = document.querySelector(`#root`)

customreact(reactElement, mainContainer)
