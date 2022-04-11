<?php

namespace App\Entity;

use App\Repository\PlanificacionTalleresRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlanificacionTalleresRepository::class)]
class PlanificacionTalleres
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $idPlanificacio;

    #[ORM\Column(type: 'integer')]
    private $TallerId;

    #[ORM\Column(type: 'integer')]
    private $ProfesorId;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $NombreUsuarisMaxim;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $DataTaller;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $HoraI;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $HoraF;

    #[ORM\Column(type: 'text', length: 65000, nullable: true)]
    private $Observacions;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Estat;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $MotiuAnulacio;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $CostMaterial;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $NotaMediaAlumnos;
    

    public function getId(): ?int
    {
        return $this->id;
    }
   
    public function getIdPlanificacio(): ?int
    {
        return $this->idPlanificacio;
    }

    public function setIdPlanificacio(int $idPlanificacio): self
    {
        $this->idPlanificacio = $idPlanificacio;

        return $this;
    }

    public function getTallerId(): ?int
    {
        return $this->TallerId;
    }

    public function setTallerId(int $TallerId): self
    {
        $this->TallerId = $TallerId;

        return $this;
    }

    public function getProfesorId(): ?int
    {
        return $this->ProfesorId;
    }

    public function setProfesorId(int $ProfesorId): self
    {
        $this->ProfesorId = $ProfesorId;

        return $this;
    }

    public function getNombreUsuarisMaxim(): ?int
    {
        return $this->NombreUsuarisMaxim;
    }

    public function setNombreUsuarisMaxim(?int $NombreUsuarisMaxim): self
    {
        $this->NombreUsuarisMaxim = $NombreUsuarisMaxim;

        return $this;
    }

    public function getDataTaller(): ?string
    {
        return $this->DataTaller;
    }

    public function setDataTaller(?string $DataTaller): self
    {
        $this->DataTaller = $DataTaller;

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

    public function getObservacions(): ?string
    {
        return $this->Observacions;
    }

    public function setObservacions(?string $Observacions): self
    {
        $this->Observacions = $Observacions;

        return $this;
    }

    public function getEstat(): ?int
    {
        return $this->Estat;
    }

    public function setEstat(?int $Estat): self
    {
        $this->Estat = $Estat;

        return $this;
    }

    public function getMotiuAnulacio(): ?string
    {
        return $this->MotiuAnulacio;
    }

    public function setMotiuAnulacio(?string $MotiuAnulacio): self
    {
        $this->MotiuAnulacio = $MotiuAnulacio;

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

    public function getNotaMediaAlumnos(): ?string
    {
        return $this->NotaMediaAlumnos;
    }

    public function setNotaMediaAlumnos(?string $NotaMediaAlumnos): self
    {
        $this->NotaMediaAlumnos = $NotaMediaAlumnos;

        return $this;
    }
}
