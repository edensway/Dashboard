import Button from "../components/Button";

import accounts_icon from "../assets/Icons/accounts.svg";
import calculator_icon from "../assets/Icons/calculator.svg";
import calender_icon from "../assets/Icons/calender.svg";
import docs_icon from "../assets/Icons/docs.svg";
import email_icon from "../assets/Icons/email.svg";
import folder_icon from "../assets/Icons/folder.svg";
import form_icon from "../assets/Icons/form.svg";
import messages_icon from "../assets/Icons/messages.svg";
import sheet_icon from "../assets/Icons/sheet.svg";
import sparkles_icon from "../assets/Icons/sparkles.svg";
import video from "../assets/Icons/video.svg";

export default function Dashboard() {

    const dashvars = [
        { name: "Calender", icon: calender_icon, url: "https://calendar.google.com/calendar/" },
        { name: "Form", icon: form_icon, url: "https://forms.gle/YcSrvwSq9EvsBxZd6" },
        { name: "Sheet", icon: sheet_icon, url: "https://docs.google.com/spreadsheets/d/1LF8fNTsIzTbvK93igNOA3h3SG4DffCdmX-aLPfZ63yA" },
        { name: "Docs", icon: docs_icon, url: "https://docs.google.com/document" },
        { name: "Drive", icon: folder_icon, url: "https://drive.google.com/drive/folders/1PT_zsZZCxUFTsauhi_28uaIkTq-6aVxo?usp=drive_link" },
        { name: "Email", icon: email_icon, url: "https://gmail.com/" },
        { name: "Messages", icon: messages_icon, url: "https://web.whatsapp.com/" },
        { name: "Account", icon: accounts_icon, url: "https://books.zoho.in/app/" },
        { name: "Calculator", icon: calculator_icon, url: "https://edensway.github.io/Body-Fat-Calculator/" },
        { name: "Gemini", icon: sparkles_icon, url: "https://gemini.google.com/app" },
        { name: "Videos", icon: video, url: "https://youtube.com/" },
    ];

    return (
        <div className="dashboard">
            <div className="dashboard_container container">
                {dashvars.map((item, index) => (
                    <Button
                        key={index}
                        name={item.name}
                        icon={item.icon}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
    );

}