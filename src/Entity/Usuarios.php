<?php

namespace App\Entity;

use App\Repository\UsuariosRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UsuariosRepository::class)]
class Usuarios
{
    
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $IdUsuario;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $NomUsuari;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $CongnomsUsuari;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Genere;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $AnyNaixement;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $ViaConeixement2;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $TipusVia;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $NomVia;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $NumVia;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Pis;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $NomPoblacio;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Cp;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $TlfFixe;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $TlfMobil;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Email;

    #[ORM\Column(type: 'boolean')]
    private $InfoPeriodica;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Observacions;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private $CondicionsServei;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $DataAlta;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Dni;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Alerta;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $TipoDni;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Password;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $BActualizado;



    public function getIdUsuario(): ?int
    {
        return $this->IdUsuario;
    }

    public function setIdUsuario(int $IdUsuario): self
    {
        $this->IdUsuario = $IdUsuario;

        return $this;
    }

    public function getNomUsuari(): ?string
    {
        return $this->NomUsuari;
    }

    public function setNomUsuari(?string $NomUsuari): self
    {
        $this->NomUsuari = $NomUsuari;

        return $this;
    }

    public function getCongnomsUsuari(): ?string
    {
        return $this->CongnomsUsuari;
    }

    public function setCongnomsUsuari(?string $CongnomsUsuari): self
    {
        $this->CongnomsUsuari = $CongnomsUsuari;

        return $this;
    }

    public function getGenere(): ?string
    {
        return $this->Genere;
    }

    public function setGenere(?string $Genere): self
    {
        $this->Genere = $Genere;

        return $this;
    }

    public function getAnyNaixement(): ?int
    {
        return $this->AnyNaixement;
    }

    public function setAnyNaixement(?int $AnyNaixement): self
    {
        $this->AnyNaixement = $AnyNaixement;

        return $this;
    }

    public function getViaConeixement2(): ?string
    {
        return $this->ViaConeixement2;
    }

    public function setViaConeixement2(?string $ViaConeixement2): self
    {
        $this->ViaConeixement2 = $ViaConeixement2;

        return $this;
    }

    public function getTipusVia(): ?string
    {
        return $this->TipusVia;
    }

    public function setTipusVia(?string $TipusVia): self
    {
        $this->TipusVia = $TipusVia;

        return $this;
    }

    public function getNomVia(): ?string
    {
        return $this->NomVia;
    }

    public function setNomVia(?string $NomVia): self
    {
        $this->NomVia = $NomVia;

        return $this;
    }

    public function getNumVia(): ?string
    {
        return $this->NumVia;
    }

    public function setNumVia(?string $NumVia): self
    {
        $this->NumVia = $NumVia;

        return $this;
    }

    public function getPis(): ?string
    {
        return $this->Pis;
    }

    public function setPis(?string $Pis): self
    {
        $this->Pis = $Pis;

        return $this;
    }

    public function getNomPoblacio(): ?string
    {
        return $this->NomPoblacio;
    }

    public function setNomPoblacio(?string $NomPoblacio): self
    {
        $this->NomPoblacio = $NomPoblacio;

        return $this;
    }

    public function getCp(): ?string
    {
        return $this->Cp;
    }

    public function setCp(?string $Cp): self
    {
        $this->Cp = $Cp;

        return $this;
    }

    public function getTlfFixe(): ?string
    {
        return $this->TlfFixe;
    }

    public function setTlfFixe(?string $TlfFixe): self
    {
        $this->TlfFixe = $TlfFixe;

        return $this;
    }

    public function getTlfMobil(): ?string
    {
        return $this->TlfMobil;
    }

    public function setTlfMobil(?string $TlfMobil): self
    {
        $this->TlfMobil = $TlfMobil;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->Email;
    }

    public function setEmail(?string $Email): self
    {
        $this->Email = $Email;

        return $this;
    }

    public function getInfoPeriodica(): ?bool
    {
        return $this->InfoPeriodica;
    }

    public function setInfoPeriodica(bool $InfoPeriodica): self
    {
        $this->InfoPeriodica = $InfoPeriodica;

        return $this;
    }

    public function getObservacions(): ?string
    {
        return $this->Observacions;
    }

    public function setObservacions(?string $Observacions): self
    {
        $this->Observacions = $Observacions;

        return $this;
    }

    public function getCondicionsServei(): ?bool
    {
        return $this->CondicionsServei;
    }

    public function setCondicionsServei(?bool $CondicionsServei): self
    {
        $this->CondicionsServei = $CondicionsServei;

        return $this;
    }

    public function getDataAlta(): ?string
    {
        return $this->DataAlta;
    }

    public function setDataAlta(?string $DataAlta): self
    {
        $this->DataAlta = $DataAlta;

        return $this;
    }

    public function getDni(): ?string
    {
        return $this->Dni;
    }

    public function setDni(?string $Dni): self
    {
        $this->Dni = $Dni;

        return $this;
    }

    public function getAlerta(): ?string
    {
        return $this->Alerta;
    }

    public function setAlerta(?string $Alerta): self
    {
        $this->Alerta = $Alerta;

        return $this;
    }

    public function getTipoDni(): ?int
    {
        return $this->TipoDni;
    }

    public function setTipoDni(?int $TipoDni): self
    {
        $this->TipoDni = $TipoDni;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->Password;
    }

    public function setPassword(?string $Password): self
    {
        $this->Password = $Password;

        return $this;
    }

    public function getBActualizado(): ?int
    {
        return $this->BActualizado;
    }

    public function setBActualizado(?int $BActualizado): self
    {
        $this->BActualizado = $BActualizado;

        return $this;
    }
}
