import Link from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";


const styles: CSSProperties = {
    color: '#2b6bb6',
    textDecoration: 'underline'
}

type Props = { name:string}

const ActiveLink: FC<Props> = ({name}) => {

    const router = useRouter();
    console.log(router);
    const href = name === "home" ? "/" : `/${name}`

    return(
        <Link href={href} legacyBehavior>
            <a style={router.asPath === href ? styles : undefined}>{name}</a>
        </Link>
    )
}

export default ActiveLink;