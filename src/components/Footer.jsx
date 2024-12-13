
export default function Footer(){
    return(
        <>
       
       <footer id="footer" className="bg-white text-sm">

<div className="footer-newsletter bg-gray-100 py-12 text-center text-gray-600">
  <div className="container mx-auto">
    <div className="flex justify-center mb-6">
      <div className="lg:w-1/2">
        <h4 className="text-2xl font-semibold text-gray-900 mb-6">
          SUSCRIBETE AL NEWSLETTER
        </h4>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-900 text-2xl">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="text-gray-900 text-2xl">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <div className="mt-6">
          <h5 className=" font-medium text-gray-700">
            ¿Necesitas ayuda? Puedes contactarnos por Whatsapp al 11 5273-8187 en nuestro horario de atención que es de lunes a sábado de 9 a 18hs.
          </h5>
        </div>

        <div className="container mx-auto text-center mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-gray-600">Botón de arrepentimiento</div>
            <div className="text-gray-600">Política de reembolso</div>
            <div className="text-gray-600">Sobre nosotros</div>
          </div>
        </div>

        <div className="border-b border-gray-300 mt-6"></div>

        <div className="mt-3 text-gray-600">
          © 2024, Rusty Argentina | DESIGNED & DEVELOPED BY CODE ARG
        </div>

      </div>
    </div>
  </div>
</div>

</footer>

        </>
    )
}