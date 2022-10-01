import { Select, SelectProps } from "@mantine/core";

type Props = Pick<SelectProps, "data">;

export const Dropdown = (props: SelectProps) => {
  return (
    <Select
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
      {...props}
    />
  );
};

//interface Dropdown {
//element: Channels;
//setElement: any;
//dropdownItems: Channels[];
//}

//    <div
//{...props}
//onClick={handleActive}
//className={`${isActive ? 'dropdown is-active' : 'dropdown'}`}
//>
//<div className="dropdown-trigger">
//<button
//className="listbox"
//aria-haspopup="true"
//aria-controls="dropdown-menu"
//>
//<span>{element.title}</span>
//</button>
//</div>
//<div
//onMouseLeave={() => setIsActive(false)}
//className="dropdown-menu"
//id="dropdown-menu"
//role="menu"
//>
//<div style={{ cursor: "pointer" }} className="dropdown-content">
//{dropdownItems.map((item: any, index: number) => (
//<div
//onClick={() => setElement(item)}
//className="dropdown-item"
//key={index}
//>
//{item.title}
//</div>
//))}
//</div>
//</div>
//</div>
//);
//};
