interface Props {
    // Variable : tipo
    count: number;
    // Función : parámetros : retorno
    onClick: () => void;
  }
  
function MyButton(Props: Props) {
     //useState(0)
     const { count, onClick } = Props;
  
     return (
        <button
          onClick={onClick}
          className="border-2 border-green-500 bg-grey-500 hover:bg-blue-600 shadow-lg hover:shadow-xl px-6 py-2 rounded-full text-black transition-all duration-300 ease-in-out"
        >
          Hiciste clic {count} veces
        </button>
      );
  }

/*
function MyButton() {

    function handleClick() {
      alert('¡Me hiciste clic!');
    }
  
    return (
      <button onClick={handleClick}>

        Hazme clic
      </button>
    );
  }
*/
//  <button onClick={handleClick()}></button>
export default MyButton;