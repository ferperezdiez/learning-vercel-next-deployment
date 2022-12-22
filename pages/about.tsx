/* eslint-disable @next/next/no-html-link-for-pages */
import { ReactElement } from 'react'
import DarkLayout from '../compenents/layouts/DarkLayout'
import MainLaouts from '../compenents/layouts/Mainlayouts'
import MainContent from '../compenents/MainContent'

export default function About () {
    return(
            <MainContent name="about"/>
    )
}


About.getLayout = function getLayout (page: ReactElement) {
    return(
        <MainLaouts name="About">
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLaouts>
    )
}