import Link from 'next/link';
import StudentInfo from './StudentInfo.js';

export default function Page()
{
    return (
        <div>
            <h1>CPRG 306: Web Development 2 - Assignments</h1>
           <StudentInfo/>
            <Link href="\week2">week2</Link>
            <p></p>
            <Link href="\week3">week3</Link>
            <p></p>
            <Link href="\week4">week4</Link>
            <p></p>
            <Link href="\week5">week5</Link>
            <p></p>
            <Link href="\week6">week6</Link>
        </div>
    )
}    