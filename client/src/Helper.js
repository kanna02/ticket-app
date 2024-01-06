export function formatDate (currentDate) {
    const date = new Date(currentDate)
    const date_formatted = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    
    return date_formatted
}