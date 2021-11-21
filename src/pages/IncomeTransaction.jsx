import React from "react";

import cssMod from "./IncomeTransaction.module.css";
import { Container, Table } from "react-bootstrap";

export default function IncomeTransaction() {
  document.title = "Ways Food - Income Transaction";
  return (
    <Container className="px-xs-1 px-md-3 px-xl-5 mt-5 pb-5">
      <h4 className={`${cssMod.title} mb-4`}>Income Transaction</h4>
      <table className={cssMod.tableGroup}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Product Order</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sugeng No Pants</td>
            <td>Cileungsi</td>
            <td className={cssMod.tdProduct}>
              <div className={cssMod.product}>
                Paket Geprek, Paket Mie Ayam Geprek
              </div>
            </td>
            <td style={{ color: "var(--textWarning)" }}>Waiting Approve</td>
            <td>
              <div className={cssMod.btnGroup}>
                <button className={cssMod.btnCancel}>Cancel</button>
                <button className={cssMod.btnApprove}>Approve</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Haris Gams</td>
            <td>Serang</td>
            <td className={cssMod.tdProduct}>
              <div className={cssMod.product}>
                Paket Geprek, Paket Mie Ayam Geprek
              </div>
            </td>
            <td style={{ color: "var(--textSuccess)" }}>Success</td>
            <td className={cssMod.btnIcon}>
              <img src="/icon/success.svg" alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
