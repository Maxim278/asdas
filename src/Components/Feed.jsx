const Feed = () => {
    const obj = {
        string: 'string',
        num: 345234,
        bool: true,
        teammates: {
            tm1: 'gamer1',
            tm2: 'gamer2',
            tm3: 'gamer3',
            tm4: 'gamer4',
            tm5: {
                name: 'Nicolas',
                age: 123,
                house: true,
            },
        },
        massive: ['arrEl0', 'arrEl1','arrEl2']
    };

    const objShadow = {...obj};

    objShadow.teammates.tm5.age = 124213432443234124323142413113241432212423412341231234123412341234123412341234123;

    const funca = () => {
        console.log(`obj values are `);
        console.log(obj);
        console.log(`objShadow values are `)
        console.log(objShadow)
    }
    return (
        <div>
            {funca()}
        </div>
    )
}

export default Feed;