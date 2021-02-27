import {useRouter} from "next/router"
import en from "./en"
import kin from "./kin"

export const translateHook = () => {
  const router = useRouter()
  const {locale} = router
  let translation
  translation = locale === "en" ? en : kin
  return translation
}
