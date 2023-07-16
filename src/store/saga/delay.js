export default function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(3)
        },1000)
    })
}