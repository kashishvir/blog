import Image from "next/image";
function Logo(props:any) {
    const {renderDefault , title} = props;
  return (
    <div className="flex items-center space-x-2">
        <Image
            className = "rounded-full object-cover"
            height = {40}
            width = {40}
            src = "https://seeklogo.com/images/B/blogger-icon-logo-93FC9A4806-seeklogo.com.png"
            alt="logo"
            />
        {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo