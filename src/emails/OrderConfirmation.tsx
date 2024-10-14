import { Button, Container, Text, Img } from "@react-email/components"
import { TyeEmailTemplate } from "./AppNameEmailTemplate"
import { Fragment } from "react"

//Looks like you purchased a project from us. You can use this platform to track our progress. Click the link to create a password for your login.
export const OrderConfirmation = ({ name, order }: { name: string, order: { pagesInDesign: string[], pagesInDevelopment: { pageName: string, stages: string[] }[] } }) => {
    return <Fragment />
}
