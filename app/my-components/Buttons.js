import { Button } from "@/components/ui/button"

export function Buttons(props) {
  return <Button onClick={props.onClick} variant="outline"className="text-black text-md">{props.title}</Button>
}
