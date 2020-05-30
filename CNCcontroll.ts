//% color=#B22222 weight=75 icon="\uf168"
namespace CNC {
    //% block
    export function Move(k: number, d: Dirrection): void {
        switch (d) {
            case Dirrection.x:


                radio.sendValue("x", k)
                break
            case Dirrection.y:


                radio.sendValue("y", k)
                break
            case Dirrection.z:


                radio.sendValue("z", k)
                break

        }
    }
    //% block
    export function Start(): void {


        radio.sendString("start")
    }

    //% block
    export function Pause(): void {
        radio.sendString("pause")

    }
    //% block
    export function Stop(): void {


        radio.sendString("stop")
    }






































}