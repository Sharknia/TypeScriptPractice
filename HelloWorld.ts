import * as _ from 'lodash';

class startup{
    public static main(): number{
        const group = _.groupBy(['one', 'two', 'three'], 'length');
        console.log(group);
        return 0;
    }
}

startup.main();