import React, { useEffect, useState, useContext } from 'react';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import moment from 'moment';
import 'moment-timezone';
import { ThemeContext } from 'styled-components';
import { FaCircle } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import { ConfirmationToast } from '../../components/ConfirmationToast';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Order, Status, OrderId, Items, Date, OrderAdmin, StatusAdmin } from './styles';

export function CardOrder({ data }) {

  const theme = useContext(ThemeContext);

  const { isAdmin } = useAuth();

  const queryWidth = 1050;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth >= queryWidth);

  const [selectedStatus, setSelectedStatus] = useState(data.status);
  const [loadingStatus, setLoadingStatus] = useState(false);

  function formatDate(dateString) {
    const dataMoment = moment(dateString);

    dataMoment.tz(moment.tz.guess());

    const formattedDate = dataMoment.format("DD/MM [às] HH[h]mm");

    return formattedDate;
  };

  async function handleUpdateOrderStatus(status) {
    const confirmed = await new Promise((resolve) => {

      const customId = "handleUpdateOrder";

      toast(
        <ConfirmationToast
          message={"Deseja realmente atualizar o status do pedido?"}
          confirm={"Atualizar"}
          cancel={"Cancelar"}
          onConfirm={() => resolve(true)}
          onCancel={() => resolve(false)}
        />, {
        toastId: customId,
        containerId: 'await'
      }
      );
    });

    if (confirmed) {
      try {
        setLoadingStatus(true);
        const response = await api.put(`/orders/${data.id}`, { status });

        if (response.status === 200) {
          setSelectedStatus(status);
          toast('Status atualizado com sucesso!', { containerId: 'autoClose' });
        } else {
          toast('Erro ao atualizar o status. Por favor, tente novamente.', { containerId: 'autoClose' });
        };
      } catch (error) {
        console.error("Erro ao processar a atualização:", error);
        toast("Erro ao processar a requisição. Por favor, tente novamente.", { containerId: 'autoClose' });
      } finally {
        setLoadingStatus(false);
      };
    };
  };

  const handleStatus = (event) => {
    handleUpdateOrderStatus(event.target.value)
  };

  function handleResize() {
    setWindowWidth(window.innerWidth >= queryWidth)
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      {
        isAdmin ? (
          <OrderAdmin>
            <StatusAdmin>
              <div>
                {
                  selectedStatus === "Pendente" &&
                  <FaCircle size={10} style={{ color: theme.COLORS.TOMATO_300 }} />
                }
                {
                  selectedStatus === "Preparando" &&
                  <FaCircle size={10} style={{ color: theme.COLORS.CARROT_100 }} />
                }
                {
                  selectedStatus === "Entregue" &&
                  <FaCircle size={10} style={{ color: theme.COLORS.MINT_100 }} />
                }
                <select
                  value={selectedStatus}
                  onChange={handleStatus}
                  disabled={loadingStatus}
                >
                  <option value="Pendente">Pendente</option>
                  <option value="Preparando">Preparando</option>
                  <option value="Entregue">Entregue</option>
                </select>
              </div>
            </StatusAdmin>

            <OrderId>
              {String(data.id).padStart(8, "0")}
            </OrderId>

            <Items>
              {data.dishes.map((dish, index) => (
                <React.Fragment key={index}>
                  {`${dish.amount} x ${dish.name}`}
                  {index !== data.dishes.length - 1 && ", "}
                </React.Fragment>
              ))}
            </Items>

            <Date>
              {formatDate(data.orders_at)}
            </Date>
          </OrderAdmin>
        ) : (
          <Order key={data.id}>
            <Status>
              {
                data.status === "Pendente" &&
                <FaCircle size={10} style={{ color: theme.COLORS.TOMATO_300 }} />
              }
              {
                data.status === "Preparando" &&
                <FaCircle size={10} style={{ color: theme.COLORS.CARROT_100 }} />
              }
              {
                data.status === "Entregue" &&
                <FaCircle size={10} style={{ color: theme.COLORS.MINT_100 }} />
              }
              {data.status}
            </Status>

            <OrderId>
              {String(data.id).padStart(8, "0")}
            </OrderId>

            <Items>
              {data.dishes.map((dish, index) => (
                <React.Fragment key={index}>
                  {`${dish.amount} x ${dish.name}`}
                  {index !== data.dishes.length - 1 && ", "}
                </React.Fragment>
              ))}
            </Items>

            <Date>
              {formatDate(data.orders_at)}
            </Date>
          </Order>
        )
      }
      <ToastContainer enableMultiContainer containerId={"await"} autoClose={false} draggable={false} />
      <ToastContainer enableMultiContainer containerId={'autoClose'} autoClose={1500} draggable={false} />
    </Container>
  )
}