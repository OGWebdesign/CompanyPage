type PrivacyProps = {
    headline: string,
    text: string,
    withHead: boolean
}

export const PrivacyParagraph = (props: PrivacyProps) => {
    return (
        <>
            {props.withHead && (
                <p className="font-mono text-slate-200 font-semibold p-10 text-[1.2rem]">
                    {props.headline}
                </p>
            )}
            <article className="font-mono text-slate-200 p-10">
                {props.text}
            </article>
        </>
    )
}