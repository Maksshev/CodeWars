function compose() {
    return Array.from(arguments).reduce((acc, cur) => {
        return acc(cur)
    })
}
