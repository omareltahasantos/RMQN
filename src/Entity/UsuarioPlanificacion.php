<?php

namespace App\Entity;

use App\Repository\UsuarioPlanificacionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UsuarioPlanificacionRepository::class)]
class UsuarioPlanificacion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $UsuariId;

    #[ORM\Column(type: 'integer')]
    private $PlanificacionId;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $FechaInscripcion;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Estado;

    #[ORM\Column(type: 'integer')]
    private $AsistenciaId;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $FechaBaja;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $MotiuNoAssistencia;

    #[ORM\Column(type: 'string', length: 1500, nullable: true)]
    private $Observacions;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsuariId(): ?int
    {
        return $this->UsuariId;
    }

    public function setUsuariId(int $UsuariId): self
    {
        $this->UsuariId = $UsuariId;

        return $this;
    }

    public function getPlanificacionId(): ?int
    {
        return $this->PlanificacionId;
    }

    public function setPlanificacionId(int $PlanificacionId): self
    {
        $this->PlanificacionId = $PlanificacionId;

        return $this;
    }

    public function getFechaInscripcion(): ?string
    {
        return $this->FechaInscripcion;
    }

    public function setFechaInscripcion(?string $FechaInscripcion): self
    {
        $this->FechaInscripcion = $FechaInscripcion;

        return $this;
    }

    public function getEstado(): ?int
    {
        return $this->Estado;
    }

    public function setEstado(?int $Estado): self
    {
        $this->Estado = $Estado;

        return $this;
    }

    public function getAsistenciaId(): ?int
    {
        return $this->AsistenciaId;
    }

    public function setAsistenciaId(int $AsistenciaId): self
    {
        $this->AsistenciaId = $AsistenciaId;

        return $this;
    }

    public function getFechaBaja(): ?string
    {
        return $this->FechaBaja;
    }

    public function setFechaBaja(?string $FechaBaja): self
    {
        $this->FechaBaja = $FechaBaja;

        return $this;
    }

    public function getMotiuNoAssistencia(): ?string
    {
        return $this->MotiuNoAssistencia;
    }

    public function setMotiuNoAssistencia(?string $MotiuNoAssistencia): self
    {
        $this->MotiuNoAssistencia = $MotiuNoAssistencia;

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
}
