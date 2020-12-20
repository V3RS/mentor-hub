export function setBorder(status) {
    if (status === 'mentor') {
        return `4px solid #A7133A`
    } else if (status === 'mentee') {
        return `4px solid #FFCF00`
    }
}
