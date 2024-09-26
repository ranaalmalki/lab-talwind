
function Footer() {
  return (
    <div>
        <footer className="footer footer-center flex justify-between bg-[#303030] text-base-content p-4 text-white">
        <h1  className="font-bold">FreshGoods</h1>

  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer