export const sortByPrice = (arr)=>[...arr].sort((a,b)=> a.price - b.price)
export const sortByTitle = (arr)=>[...arr].sort((a,b)=> a.title.localCompare(b.title))
export const sortByDate = (arr)=>[...arr].sort((a,b)=> new Date(a.date)- new Date(b.date))
export const sortByType = (arr)=>[...arr].sort((a,b)=> a.type.localCompare(b.type))

export const applySort = (arr, strategy)=> strategy(arr)