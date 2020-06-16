import React from 'react'

// com ? -> nao é obrigatorio e sem -> é obrigatória -> title?: string
interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header
