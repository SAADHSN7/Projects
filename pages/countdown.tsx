import { useState, useEffect } from 'react'
import styles from '../styles/Countdown.module.css'


const countdown = () => {

    const targetdate = new Date("12/31/2022 23:59:59 ")

    // const [targetdate, setTargetDate] = useState(new Date(""))
    // console.log(targetdate)
    
    const [timesup , setTimesup] = useState(false)

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)


    // const handleStart = () =>{
    //     setTarget(target_date)
    // }

    useEffect(() => {
        const interval = setInterval(()=>{
            const now = new Date()
            const difference = targetdate.getTime() - now.getTime()

            const d = Math.floor(difference / (1000 * 60 * 60 * 24))
            setDays(d)
            // console.log(d)

            const h = Math.floor(difference / (1000 * 60 * 60))
            setHours(h)
            // console.log(h)

            const m = Math.floor(difference / (1000 * 60))
            setMinutes(m)

            const s = Math.floor(difference / 1000)
            setSeconds(s)
        
        if (d <= 0 && h<= 0 && m <= 0 && s <= 0) {
            setTimesup(true)
        }


        }, 1000)

        return() => clearInterval(interval)
    }, [])

    

    return (
    <div>
        <h1 className={styles.countdown_header}>Countdown Timer</h1>
        {/* <form>
            <input type="date" className='target_date' value={targetdate} onChange={(e) => setTargetDate(e.target.value)}/><button>Start</button>
        </form>  */}

        {timesup ? (<h2>Times Up!</h2>) :
        (
        <div className={styles.timer_wrapper}>
            <div className={styles.timer_inner}>

                <div className={styles.timer_segment}>
                    <span className={styles.time}>{days}</span>
                    <span className={styles.label}>Days</span>

                </div>

                <span className='divider'></span>

                <div className={styles.timer_segment}>
                    <span className={styles.time}>{hours}</span>
                    <span className={styles.label}>Hours</span>
                    
                </div>

                <span className='divider'></span>

                <div className={styles.timer_segment}>
                    <span className={styles.time}>{minutes}</span>
                    <span className={styles.label}>Minutes</span>
                    
                </div>

                <span className='divider'></span>

                <div className={styles.timer_segment}>
                    <span className={styles.time}>{seconds}</span>
                    <span className={styles.label}>Seconds</span>
                    
                </div>

            </div>
        </div> )}

    </div>
    )
}

export default countdown;