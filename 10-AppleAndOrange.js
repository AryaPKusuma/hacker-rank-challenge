function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    const applesLand = apples.map( apple => apple+a)
    const orangesLand = oranges.map( orange => orange+b)

    const applesInRange = applesLand.filter( apple => apple >= s && apple <= t ).length
    const orangesInRange = orangesLand.filter( orange => orange >= s && orange <= t).length

    return console.log(`${applesInRange}\n${orangesInRange}`)
}

// a = apples tree; b = orange tree
const s = 7; t = 10; a = 4; b = 12;

const apples = [2, 3, -4];
const orange = [3, -2, -4];

countApplesAndOranges(s, t, a, b, apples, orange)


