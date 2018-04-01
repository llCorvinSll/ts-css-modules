import * as React from "react";
import {DemoEnum} from "./enum/enum";
import * as Fake from "./dts/fake.css";
// import "./dts/fake.css";
// import FakeEnum from "./dts/fake";


// var a = Fake.ASD;


export class Demo extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <div>
                    one {DemoEnum.TWO}
                </div>
                <div>
                    two {DemoEnum.ONE} {Fake.FakeEnum.FIVE}
                </div>
            </div>
        );
    }
}