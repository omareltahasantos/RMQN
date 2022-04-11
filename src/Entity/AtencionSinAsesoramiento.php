<?php

namespace App\Entity;

use App\Repository\AtencionSinAsesoramientoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AtencionSinAsesoramientoRepository::class)]
class AtencionSinAsesoramiento
{
   
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $idGestioAdm;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $DataGestioAdm;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $TipusConsulta;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Sexe;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $FranjaAdm;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $ModeContacte;

   

    public function getIdGestioAdm(): ?int
    {
        return $this->idGestioAdm;
    }

    public function setIdGestioAdm(int $idGestioAdm): self
    {
        $this->idGestioAdm = $idGestioAdm;

        return $this;
    }

    public function getDataGestioAdm(): ?string
    {
        return $this->DataGestioAdm;
    }

    public function setDataGestioAdm(?string $DataGestioAdm): self
    {
        $this->DataGestioAdm = $DataGestioAdm;

        return $this;
    }

    public function getTipusConsulta(): ?int
    {
        return $this->TipusConsulta;
    }

    public function setTipusConsulta(?int $TipusConsulta): self
    {
        $this->TipusConsulta = $TipusConsulta;

        return $this;
    }

    public function getSexe(): ?string
    {
        return $this->Sexe;
    }

    public function setSexe(?string $Sexe): self
    {
        $this->Sexe = $Sexe;

        return $this;
    }

    public function getFranjaAdm(): ?string
    {
        return $this->FranjaAdm;
    }

    public function setFranjaAdm(?string $FranjaAdm): self
    {
        $this->FranjaAdm = $FranjaAdm;

        return $this;
    }

    public function getModeContacte(): ?string
    {
        return $this->ModeContacte;
    }

    public function setModeContacte(?string $ModeContacte): self
    {
        $this->ModeContacte = $ModeContacte;

        return $this;
    }
}
