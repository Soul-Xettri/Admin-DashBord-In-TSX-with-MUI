import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Row {
  id: number;
  product: string;
  img: string;
  customer: string;
  date: string;
  amount: number;
  method: string;
  status: string;
}

export default function BasicTable() {
  const rows: Row[] = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://itti.com.np/pub/media/catalog/product/cache/c0bb400db441ec67b37045c5a66e35a8/a/c/acer-nitro-5-2021-price-nepal-ryzen-5-5600h-gtx-1650.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://media.wired.com/photos/629133e5e9a46d033b3380c7/3:2/w_2400,h_1600,c_limit/Finding-a-PlayStation-5-Is-About-to-Get-Easier-Gear-shutterstock_1855958302.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2242353,
      product: "Redragon S101",
      img: "https://technoholicnepal.com/wp-content/uploads/2022/08/download-4-5.jpg",
      customer: "Jhon Smith",
      date: "1 March",
      amount: 23,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://4.img-dpreview.com/files/p/E~TC1200x900S1200x900~articles/6096287211/DLCS1672-Edit.jpeg",
      customer: "Jhon Smith",
      date: "1 March",
      amount: 233,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2345353,
      product: "ASUS ROG Strix",
      img: "https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/a/s/asus-rog-strix-g15-g513qe-price-nepal-gaming-laptop-ryzen-7-5800h-rtx-3050ti.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
