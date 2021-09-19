import React, { Fragment } from 'react';
import { Paper, Table, TableContainer, TableBody, TableHead, TableRow, TableCell, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MessageIcon from '@material-ui/icons/Message';
import api from '../../api/api';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeMessage, selectMessage } from '../../redux/messageSlice';


function MessagesTable() {
    const messages = useSelector(selectMessage);
    const dispatch = useDispatch();

    const getApi = async () => {
        try {
            const response = await api.get(`/messages`);
            dispatch(changeMessage(response.data.map(item => item)))
        } catch (error) {
            alert("Erro GET na api");
        }
    };

    const deleteItem = async (id) => {
        await api.delete(`/messages/${id}`);
        getApi();
    }

    const createRow = () => {
        return messages.map(item => {
            return (
                <TableRow key={item.id}>
                    <TableCell>{item.trigger}</TableCell>
                    <TableCell>{item.channel}</TableCell>
                    <TableCell>{item.timer}</TableCell>
                    <TableCell>
                        <IconButton onClick={() => alert(item.message)}>
                            <MessageIcon />
                        </IconButton>
                    </TableCell>
                    <TableCell>
                        <IconButton onClick={() => deleteItem(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            )
        })
    }

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Trigger</TableCell>
                            <TableCell>Canal</TableCell>
                            <TableCell>Timer</TableCell>
                            <TableCell>Mensagem</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {createRow()}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

export default MessagesTable;



