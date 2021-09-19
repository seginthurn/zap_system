import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import api from '../../Utils/api/api';

const MySwal = withReactContent(Swal);

export function modalError(message) {
  MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message
  });
}

export function modalSucess(message) {
  MySwal.fire({
    icon: 'success',
    title: 'Uhuul!',
    text: message,
  });
}

export function modalMessage(message) {
  MySwal.fire(message)
}


export async function modalDeleteConfirm(id) {
  await MySwal.fire({
    title: 'Você tem Certeza?',
    text: "Você não poderá recuperar esta mensagem depois",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Não, mudei de ideia',
    confirmButtonText: 'Sim, delete!'
  }).then((result) => {
    if (result.isConfirmed) {

      api.delete(`/messages/${id}`);
      MySwal.fire({
        title: 'Mensagem excluída!',
        icon: 'success'
      }
      );

    }
  })
}
