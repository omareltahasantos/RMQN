<?php

namespace App\Entity;

use App\Repository\TalleresRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TalleresRepository::class)]
class Talleres
{
    
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $idTaller;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $CodiTaller;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $NomTaller_Cat;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $NomTaller_Cas;

    #[ORM\Column(type: "text", length: 65535, nullable: true)]
    private $DescripcioTaller_Cat;

    #[ORM\Column(type: "text", length: 65535, nullable: true)]
    private $DescripcioTaller_Cas;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Format;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Tematica;

    #[ORM\Column(type: 'decimal', precision: 5, scale: 2, nullable: true)]
    private $DuracionHoras;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Places;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $CostMaterial;

    #[ORM\Column(type: "text", length: 65535, nullable: true)]
    private $Observacions_Cat;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $HoraI;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $HoraF;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $FechaCreacio;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Modificado;

    #[ORM\Column(type: "text", length: 65535, nullable: true)]
    private $Observacions_Cas;

   

    public function getIdTaller(): ?int
    {
        return $this->idTaller;
    }

    public function setIdTaller(int $idTaller): self
    {
        $this->idTaller = $idTaller;

        return $this;
    }

    public function getCodiTaller(): ?string
    {
        return $this->CodiTaller;
    }

    public function setCodiTaller(?string $CodiTaller): self
    {
        $this->CodiTaller = $CodiTaller;

        return $this;
    }

    public function getNomTallerCat(): ?string
    {
        return $this->NomTaller_Cat;
    }

    public function setNomTallerCat(?string $NomTaller_Cat): self
    {
        $this->NomTaller_Cat = $NomTaller_Cat;

        return $this;
    }

    public function getNomTallerCas(): ?string
    {
        return $this->NomTaller_Cas;
    }

    public function setNomTallerCas(?string $NomTaller_Cas): self
    {
        $this->NomTaller_Cas = $NomTaller_Cas;

        return $this;
    }

    public function getDescripcioTallerCat(): ?string
    {
        return $this->DescripcioTaller_Cat;
    }

    public function setDescripcioTallerCat(?string $DescripcioTaller_Cat): self
    {
        $this->DescripcioTaller_Cat = $DescripcioTaller_Cat;

        return $this;
    }

    public function getDescripcioTallerCas(): ?string
    {
        return $this->DescripcioTaller_Cas;
    }

    public function setDescripcioTallerCas(?string $DescripcioTaller_Cas): self
    {
        $this->DescripcioTaller_Cas = $DescripcioTaller_Cas;

        return $this;
    }

    public function getFormat(): ?int
    {
        return $this->Format;
    }

    public function setFormat(?int $Format): self
    {
        $this->Format = $Format;

        return $this;
    }

    public function getTematica(): ?string
    {
        return $this->Tematica;
    }

    public function setTematica(?string $Tematica): self
    {
        $this->Tematica = $Tematica;

        return $this;
    }

    public function getDuracionHoras(): ?string
    {
        return $this->DuracionHoras;
    }

    public function setDuracionHoras(?string $DuracionHoras): self
    {
        $this->DuracionHoras = $DuracionHoras;

        return $this;
    }

    public function getPlaces(): ?int
    {
        return $this->Places;
    }

    public function setPlaces(?int $Places): self
    {
        $this->Places = $Places;

        return $this;
    }

    public function getCostMaterial(): ?int
    {
        return $this->CostMaterial;
    }

    public function setCostMaterial(?int $CostMaterial): self
    {
        $this->CostMaterial = $CostMaterial;

        return $this;
    }

    public function getObservacionsCat(): ?string
    {
        return $this->Observacions_Cat;
    }

    public function setObservacionsCat(?string $Observacions_Cat): self
    {
        $this->Observacions_Cat = $Observacions_Cat;

        return $this;
    }

    public function getHoraI(): ?string
    {
        return $this->HoraI;
    }

    public function setHoraI(?string $HoraI): self
    {
        $this->HoraI = $HoraI;

        return $this;
    }

    public function getHoraF(): ?string
    {
        return $this->HoraF;
    }

    public function setHoraF(?string $HoraF): self
    {
        $this->HoraF = $HoraF;

        return $this;
    }

    public function getFechaCreacio(): ?string
    {
        return $this->FechaCreacio;
    }

    public function setFechaCreacio(?string $FechaCreacio): self
    {
        $this->FechaCreacio = $FechaCreacio;

        return $this;
    }

    public function getModificado(): ?int
    {
        return $this->Modificado;
    }

    public function setModificado(?int $Modificado): self
    {
        $this->Modificado = $Modificado;

        return $this;
    }

    public function getObservacionsCas(): ?string
    {
        return $this->Observacions_Cas;
    }

    public function setObservacionsCas(?string $Observacions_Cas): self
    {
        $this->Observacions_Cas = $Observacions_Cas;

        return $this;
    }
}
