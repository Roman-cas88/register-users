import React, { useEffect, useState } from 'react'

export const DatePicker = ({ pickBirthday }) => {
    let date = new Date()
    const currentYear = date.getFullYear()

    const yearsArray = Array.from({length: 89}, (_, index) => index + (currentYear-100))
    const yearsOption = yearsArray.reverse()
    
    const monthsArray = Array.from({length: 12}, (_, index) => index + 1)
    const monthsOption = monthsArray.reverse()
    
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    const [day, setDay] = useState()
    
    let days = 31
    const lenghthOfMonth = () => {
        days = new Date(year, month, 0).getDate()
    }
    
    const daysArray = Array.from({length: days}, (_, index) => index + 1)
    const daysOption = daysArray.reverse()
 
  

    const selectYear = (e) => {
        setYear(e.target.value)
        lenghthOfMonth()
    }
    const selectMonth = (e) => {
        setMonth(e.target.value)
        lenghthOfMonth()
    }
    const selectDay = (e) => {
        setDay(e.target.value)
    }


    useEffect(() => {
        pickBirthday({
            year: year,
            month: month,
            day: day,
        })
    }, [year, month, day])

  return (
    <div>
        <select onChange={selectYear}>
            <option>Year</option>
            {yearsOption.map((option, index) => {
                return <option key={index}>
                    {option}
                </option>
            })}
        </select>
        <select onChange={selectMonth}>
            <option>Month</option>
            {monthsOption.map((option, index) => {
                return <option key={index}>
                    {option}
                </option>
            })}
        </select>
        <select onChange={selectDay}>
            <option>Day</option>
            {daysOption.map((option, index) => {
                return <option key={index}>
                    {option}
                </option>
            })}
        </select>
    </div>
  )
}
