
const enlacesCatalogos = {
    avon: "https://drive.google.com/file/d/151_bADvD2CRd3m8O3ytHtz4BLeSNT8Pb/view?usp=drive_link",
    natura: "https://drive.google.com/file/d/1BiQY0JIDqhpg2cKfIuogao1uLDgKGZl5/view?usp=drive_link",
    outlet: "https://drive.google.com/file/d/1SN_BOBFOIl_MkLjcZwZ294st9sG1RQpn/view?usp=drive_link"
};

// Botón Avon
document.getElementById("btn-avon").href = enlacesCatalogos.avon;
document.getElementById("btn-avon").target = "_blank";
document.getElementById("btn-avon").rel = "noopener noreferrer";

// Botón Natura
document.getElementById("btn-natura").href = enlacesCatalogos.natura;
document.getElementById("btn-natura").target = "_blank";
document.getElementById("btn-natura").rel = "noopener noreferrer";

// Botón Outlet
document.getElementById("btn-outlet").href = enlacesCatalogos.outlet;
document.getElementById("btn-outlet").target = "_blank";
document.getElementById("btn-outlet").rel = "noopener noreferrer";

console.log("Catálogos enlazados correctamente ✅");
